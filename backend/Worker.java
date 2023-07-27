package com.example.demo;//package com.example.demo.Worker;



import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;




@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Worker {
    @Id
    @SequenceGenerator(
            name ="Worker_sequence",
            sequenceName ="Worker_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "Worker_sequence"
    )

    private Long id;
    private String name;
    private String l_name;
    private Integer age;
    private String email;
    private String password; // New field for password


    @Override
    public String toString() {
        return "Worker{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", l_name='" + l_name + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", password='" + password + '\'' +
                '}';
    }
}