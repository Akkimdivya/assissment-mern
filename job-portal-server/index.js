import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import multer from 'multer';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal.acg7y3u.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("mernjobportal");
    const jobCollection = db.collection("demojobs");
    const jobApplication = db.collection("jobApplication");

    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      const result = await jobCollection.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Can not insert! try again later",
          status: false
        });
      }
    });

    const upload = multer({ dest: 'uploads/' });

    app.post('/post-jobApplication', upload.single('resume'), async (req, res) => {
      try {
        const body = req.body;
        body.createdAt = new Date();

        if (req.file) {
          body.resume = req.file.path;
        }

        const result = await jobApplication.insertOne(body);
        if (result.insertedId) {
          return res.status(200).send(result);
        } else {
          return res.status(404).send({
            message: "Can not insert! try again later",
            status: false
          });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).send({
          message: "Internal server error",
          status: false
        });
      }
    });

    app.post("/apply-job", async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();

      try {
        const result = await jobApplicationsCollection.insertOne(body);
        if (result.insertedId) {
          return res.status(200).send(result);
        } else {
          return res.status(404).send({
            message: "Cannot insert job application. Please try again later.",
            status: false
          });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).send({
          message: "Server Error",
          status: false
        });
      }
    });

    app.get('/resumes/:resumeId', (req, res) => {
      const resumeId = req.params.resumeId;
      const resumePath = path.join(__dirname, 'uploads', resumeId);

      fs.readFile(resumePath, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(404).send('Resume not found');
        }
        res.setHeader('Content-Type', 'application/pdf');
        res.send(data);
      });
    });

    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollection.find({}).toArray();
      res.send(jobs);
    });

    app.get("/myJobs/:email", async (req, res) => {
      const jobs = await jobCollection.find({ postedBy: req.params.email }).toArray();
      res.send(jobs);
    });

    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      const job = await jobCollection.findOne({
        _id: new ObjectId(id)
      });
      res.send(job);
    });

    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {
        _id: new ObjectId(id)
      };
      const result = await jobCollection.deleteOne(filter);
      res.send(result);
    });

    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = {
        _id: new ObjectId(id)
      };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...jobData
        }
      };
      const result = await jobCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Close the client when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
