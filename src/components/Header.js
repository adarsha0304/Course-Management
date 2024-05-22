import React from "react";
import { CardBody,Card } from "reactstrap";

function Header({name,title}) {
    return (
        <div>
            <Card className="my-2 bg-warning">
            <CardBody>
            <h1 className="text-center my-2">Learn Code With Me</h1>
            <h3 className="text-center my-2"  ><i>"Ignite Your Passion for Learning"</i></h3>
            </CardBody>
            </Card>
        </div>
    );
}
export default Header;