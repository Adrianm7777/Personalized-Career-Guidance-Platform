import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      const authToken = data.access;

      const redirectResponse = NextResponse.redirect(new URL("/", request.url));
      redirectResponse.cookies.set("authToken", authToken, {
        httpOnly: true,
        path: "/",
        sameSite: "strict",
        secure: true,
      });

      return redirectResponse;
    } else {
      return NextResponse.json(
        { error: data.detail || "Login failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
