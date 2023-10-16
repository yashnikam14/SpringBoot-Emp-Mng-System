package com.example.yashdemo.exception;

public class StudentNotFoundException extends RuntimeException{
    
    public StudentNotFoundException(String message){
        super(message);
    }   
}
