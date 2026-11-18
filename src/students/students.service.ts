import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto.js';

@Injectable()
export class StudentsService {
    private students = [
        {id: 1, name: "Atique"},
        {id: 2, name: "ABC XYZ"}
    ]

    findAll(){
        return this.students
    }

    findOne(id: number) {
        const student = this.students.find(stu => stu.id === id)
        return student
    }

    create(dto: CreateStudentDto) {
        const student = {...dto}
        this.students.push(student)
        return student
        }
}
