export class AuthAPI {
  constructor(request) {
    this.request = request;
  }

  async createBuyerOrder() {
    const response = await this.request.post('https://admin.staging.agrigateinternal.net/rpc/buyer-orders', {
      data: {
        buyerId: "331",
        deliveryAddressId: "775",
        expiresInDays: 2,
        items: [
            {
                amountPerKg: 10,
                expectedWeightKg: 9,
                produceTypeId: "80",
                quantity: 9,
                quantityType: "KILOGRAM",
                rateOffered: 10
            }
        ],
        paymentExpectedInDays: 2
      }
    });
    console.log(response.status());
    // return body.token; // or sessionId
  }
}