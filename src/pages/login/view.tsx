import { Anchor, Button, Paper, Text, TextInput, Title } from "@mantine/core"
import { Link } from "react-router-dom"

export const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-base-200">
    <Paper p="xl" radius="md" shadow="lg" style={{ width: "100%", maxWidth: 400 }}>
      <Title order={2} ta="center" className="mb-md">
        Login
      </Title>

      <form className="flex flex-col gap-y-4">
        <TextInput label="Email" placeholder="Enter your email" required />

        <TextInput label="Password" placeholder="Enter your password" type="password" required />

        <Button type="submit" fullWidth>
          Login
        </Button>
      </form>

      <Text ta="center" size="sm" mt="md">
        Don't have an account?{" "}
        <Anchor component={Link} to="/register" c="blue" fw={500}>
          Sign up
        </Anchor>
      </Text>
    </Paper>
  </div>
)
