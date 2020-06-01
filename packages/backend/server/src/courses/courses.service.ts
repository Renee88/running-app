import {Injectable} from '@nestjs/common'
import type {Course} from '../types/courses'
const requestPromise = require('request-promise')
require('dotenv').config()

export class CoursesService {
    async getCourse(origin,destination) : Promise<Course>{
        const polylineAPI = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.API_KEY}&mode=walking`
        const encryptedPolyline = await requestPromise(polylineAPI)
        return encryptedPolyline
    }
}