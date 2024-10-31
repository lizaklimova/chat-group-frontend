import { Anchor, Button, Paper, Text, TextInput, Title } from "@mantine/core"
import { Link } from "react-router-dom"

export const RegisterPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-base-200">
    <Paper p="xl" radius="md" shadow="lg" className="w-full max-w-[400px]">
      <Title order={2} ta="center" className="mb-md">
        Create Account
      </Title>

      <form className="flex flex-col gap-y-4">
        <TextInput label="Full Name" placeholder="Enter your full name" required />

        <TextInput label="Email" placeholder="Enter your email" type="email" required />

        <TextInput label="Password" placeholder="Create a password" type="password" required />

        <TextInput
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          required
        />

        <Button type="submit" fullWidth>
          Sign Up
        </Button>
      </form>

      <Text ta="center" size="sm" mt="md">
        Already have an account?{" "}
        <Anchor component={Link} to="/" c="blue" fw={500}>
          Login
        </Anchor>
      </Text>
    </Paper>
  </div>
)
