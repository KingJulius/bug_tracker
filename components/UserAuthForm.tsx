"use client";

import { useState } from "react";
import { Card, Skeleton, Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashFilledIcon";

const UserAuthForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`The name you entered was: ${name} and ${password}`);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
                onClick={toggleVisibility}
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
          <div className="flex justify-center pt-3">
            <Button color="primary" variant="solid" type="submit">
              Login
            </Button>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default UserAuthForm;
