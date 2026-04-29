"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const signUpPage = () => {
        const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    //  option 01
    // const formData = new FormData(e.currentTarget);
    // const userData = Object.fromEntries(formData.entries());
    // console.log("form submitted data", userData);

    //   option 02
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });
    console.log({data, error})
    if(!error){
        router.push('/')
    }
  };
  return (
    <div className="w-6/12 space-y-4 mx-auto my-6 border p-6 shadow-2xl py-9 rounded-2xl">
      <h2 className="text-xl font-bold text-center">singUp page</h2>
      <Form className="flex  flex-col gap-4 space-y-2" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="name">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image Url" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex flex-col gap-3">
          <Button
            className={"w-full text-white text-md font-bold bg-taupe-700"}
            type="submit"
          >
            <Check />
            Submit
          </Button>
          <Button
            className={"w-full text-md font-bold bg-red-500"}
            type="reset"
          >
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default signUpPage;
