import { response } from "sdk/http";
import { Component, Inject } from "sdk/component";
import { PaymentComponent } from "./PaymentComponent"

@Component("myOrderProcessor")
class OrderProcessor {

    @Inject('myPaymentService')
    paymentComponent!: PaymentComponent;

}

let orderProcessor = new OrderProcessor();

if (!orderProcessor.paymentComponent) {
    response.println("orderProcessor is undefined ");
} else {
    response.println("Do Payment: " + JSON.stringify(orderProcessor.paymentComponent.doPayment("123.45")));
}