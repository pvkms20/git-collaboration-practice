import {
Controller, Get, Post, Put, Delete, Param, Body, Query,
HttpCode, HttpStatus, NotFoundException, ParseIntPipe,
} from '@nestjs/common';
import { StudentsService } from './students.service.js';
import { CreateStudentDto } from './dto/create-student.dto.js';


@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService){}

    @Get()
    findAll(){ return this.studentsService.findAll()}


    //Get a user from id
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.studentsService.findOne(id)
    }

    //Create a new user   
    @Post()
    newStudent(@Body() dto: CreateStudentDto){
        return this.studentsService.create(dto)
    }
}
