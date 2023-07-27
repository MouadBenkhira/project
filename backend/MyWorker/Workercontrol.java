package com.example.demo.MyWorker;

import java.util.List;

import com.example.demo.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "api/v1/Worker")
public class Workercontrol {

    private final Workerservice Workerservice;

    @Autowired
    public Workercontrol(Workerservice Workerservice) {
        this.Workerservice = Workerservice;
    }

    @GetMapping
    public List<Worker> getWorkers() {
        return Workerservice.getWorkers();
    }
    @PostMapping
    public void registernewWorker(@RequestBody Worker Worker){
        Workerservice.addNewWorker(Worker);
    }

    @DeleteMapping(path="{Workerid}")
    public void deleteWorker(@PathVariable("Workerid") Long Workerid){

        Workerservice.deleteWorker( Workerid);
    }
}