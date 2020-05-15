import {Controller, Get, Query} from '@nestjs/common'
import {CoursesService} from './courses.service'
import type {Course} from '../types/courses'

@Controller('courses')

export class CoursesController {
    constructor(private readonly coursesService: CoursesService){}

    @Get()
    async getCourse(
        @Query('origin') origin: string,
        @Query('destination') destination: string):Promise<Course>{
        return await this.coursesService.getCourse(origin, destination)
    }
}