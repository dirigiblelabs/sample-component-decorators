import { Component } from "sdk/component";

@Component('myPaymentService')
export class PaymentComponent {

    public doPayment(paymentData: any): any {
        return { status: "OK", data: paymentData };
    }
}

// Ensure the class is the final expression so GraalJS returns it.
PaymentComponent;