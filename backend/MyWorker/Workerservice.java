package com.example.demo.MyWorker;

import java.util.List;
import java.util.Optional;

import com.example.demo.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Workerservice {

    private final Workerrepository Workerrepository;

    @Autowired

    public Workerservice(Workerrepository Workerrepository){
        this.Workerrepository = Workerrepository;
    }
    public List<Worker> getWorkers(){
        return Workerrepository.findAll();
    }
    public void addNewWorker(Worker Worker){
        Optional<Worker> WorkerOptional =Workerrepository.findWorkerByEmail(Worker.getEmail());
        if (WorkerOptional.isPresent()){
            throw new IllegalStateException("email taken");
        }
        Workerrepository.save(Worker);
    }

    public void deleteWorker(Long Workerid){
        boolean exist = Workerrepository.existsById(Workerid);
        if(!exist){
            throw new IllegalStateException("Worker with id "+ Workerid + "does not existe");
        }
        Workerrepository.deleteById(Workerid);
    }
}