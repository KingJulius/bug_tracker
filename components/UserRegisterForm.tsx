"use client";

import { useState } from "react";
import { Card, Skeleton, Input, Button, Link } from "@nextui-org/react";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";

const UserRegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isCpVisible, setIsCpVisible] = useState(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`Thanks for registering!`);
  };

  return (
    <form
      className="flex items-center justify-center h-screen"
      onSubmit={handleSubmit}
    >
      <Card className="w-[400px] h-[400px] space-y-5 p-6" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-24 rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3">
          <Input
            type="email"
            label="Email"
            placeholder="Email"
            variant="bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
          />
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Input
            label="Confirm Password"
            variant="bordered"
            placeholder="Re-enter your password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setIsCpVisible(!isCpVisible)}
              >
                {isCpVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isCpVisible ? "text" : "password"}
          />
          <Link href="/" className="pt-3 flex justify-center">Back to Login</Link>
          <div className="flex justify-center pt-3">
            <Button color="primary" variant="solid" type="submit">
              Register
            </Button>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default UserRegisterForm;
