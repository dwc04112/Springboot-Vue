package kr.ac.daegu.springbootapi;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class Exam {
    @GetMapping("/example2")
    public String  SomeAction(@RequestParam("tEst")String test) {
        log.info("test = " + test);
        String res = "";
        if (test.equals("1")) {
            res = "one";
        } else if (test.equals("2")) {
            res = "two";
        } else {
            res = "nothing";
        }
        return res;
    }
}
