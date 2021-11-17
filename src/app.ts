import express, { Express } from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import cookieParser from 'cookie-parser';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.listen(3001, () => console.log('App listening on port 3000'));
