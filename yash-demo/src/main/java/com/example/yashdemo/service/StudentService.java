package com.example.yashdemo.service;

import java.util.List;

import com.example.yashdemo.model.Student;

public interface StudentService {
    Student addStudent(Student student);

    List<Student> getStudents();

    Student updateStudent(Student student, Long id);

    Student getStudentById(Long id);

    void deleteStudent(Long id);
}
