import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full py-6 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-gray-800">AI Startup</h1>
          <nav>
            <Button variant="link" className="mr-4">Home</Button>
            <Button variant="link" className="mr-4">About</Button>
            <Button variant="link" className="mr-4">Services</Button>
            <Button variant="link">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 flex flex-col items-center justify-center px-6">
        <Card className="w-full max-w-md mt-12">
          <CardHeader>
            <CardTitle className="text-center text-3xl">Welcome to AI Startup</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600 mb-6">
              We provide cutting-edge AI solutions to help your business grow.
            </p>
            <Separator className="my-4" />
            <form className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <Button type="submit" className="w-full">Get Started</Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="w-full py-6 bg-white shadow-md mt-12">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2023 AI Startup. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;