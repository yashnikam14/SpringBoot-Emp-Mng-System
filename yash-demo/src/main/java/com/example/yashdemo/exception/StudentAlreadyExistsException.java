package com.example.yashdemo.exception;

public class StudentAlreadyExistsException extends RuntimeException{
    
    public StudentAlreadyExistsException(String message){
        super(message);
    }
}
