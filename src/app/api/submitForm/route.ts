import { connect } from "../../../dbConnect/dbConnect";
import FormSubmission from "../../../models/FormSubmission";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, info, message } = body;
    console.log(body);

    if (
      !email ||
      !name ||
      !info?.phoneNumber ||
      !info?.CompanyName ||
      !info?.CompanyWebsite
    ) {
      return NextResponse.json(
        {
          message: "All required fields must be provided.",
        },
        {
          status: 404,
        }
      );
    }
    const newSubmission = new FormSubmission({
      email,
      name,
      info,
      message,
    });
    await newSubmission.save();
  } catch (error: any) {
    throw NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Form submitted successfully" });
}
