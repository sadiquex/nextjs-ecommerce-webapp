import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

// we're requesting payment using stripe
export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let data = await request.json();
  let priceId = data.priceId;
  console.log(priceId);
}
