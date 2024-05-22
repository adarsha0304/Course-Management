import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from "reactstrap";
import base_url from "../api/bootapi";

const Course =({course,update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course deleted");
                update(id);
            },
            (error)=>{
                toast.error("Course not deleted !! Server problem")
            }
        )
    }
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle ><strong>{course.title}</strong></CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center ">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning ms-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );

};

export default Course;