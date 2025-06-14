import express, { Request, Response } from 'express';
import cors from 'cors';
import { IProject, RequestBody } from './models/project.interface';
import { v4 as uuid } from 'uuid';

const app = express();
const PORT = 3000;
// List of projects
const projects: IProject[] = [];

// const projects: IProject[] = [
//   { id: uuid(), name: 'Sample Project', description: 'This is a sample project' }
// ];

// Setup cors and express.json()
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Errgo Backend Interview Module Loaded Successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.post('/projects', (req, res) => {
  /**
   * TODO: Complete the method for creating a new project
   * The response should contain an object of type IProject
   * 
   * Hint: Utilize the `projects` to store the newly generated of project
   * Hint: Utilize the `uuid` npm package to generate the unique ids for the project
   */
  // res.status(200).json('REPLACE_ME');

  console.log('POST /project.');
  
  if (!req.body) {
    console.log("Request body is missing.");
    res.status(400).json({ error: 'Request body is required' });
    return;
  }

  console.log('Creating a new project with data:', req.body);

  const reqBody = req.body;

  if (!reqBody.project) {
    console.log("Project data is missing in the request body.");
    res.status(400).json({ error: 'Project data is required' });
    return;
  }

  const project = reqBody.project;

  const { name, description } = project as RequestBody;

  if(!name || !description) {
    console.log("Name or description is missing in the request body.");
    res.status(400).json({ error: 'Name and description are required' });
    return;
  }
  
  const newProject: IProject = {
    id: uuid(),
    name,
    description
  };
  
  projects.push(newProject);
  
  console.log('New project created:', newProject);

  res.status(201).json(newProject);
});

app.get('/projects', (req, res) => {
  /**
   * TODO: Complete the method for returning the current list of projects
   * The responese should contain a list of IProject
   * 
   * Hint: Utilize the `projects` to retrieve the list of projects
   */
  // res.status(200).json('REPLACE_ME');

  console.log('List of projects requested. Get /projects.');

  res.status(200).json(projects);
});