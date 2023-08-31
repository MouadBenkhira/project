package com.alibou.security.controller;

import com.alibou.security.user.Problem;
import com.alibou.security.repo.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/problems")
public class ProblemController {

    private final ProblemRepository problemRepository;

    @Autowired
    public ProblemController(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    @PostMapping
    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    public Problem reportProblem(@RequestBody Problem problem) {
        return problemRepository.save(problem);
    }
}
