import { Button, Paper, Text, Title } from "@mantine/core"
import { Link } from "react-router-dom"

export const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-base-200">
    <Paper p="xl" radius="md" shadow="lg" ta="center">
      <Title order={1} className="text-6xl font-bold text-primary mb-md">
        404
      </Title>
      <Text size="xl" className="mb-md">
        Oops! Page not found.
      </Text>
      <Text className="mb-lg">The page you're looking for doesn't exist or has been moved.</Text>

      <Button component={Link} to="/" variant="filled" size="lg">
        Go Back Home
      </Button>
    </Paper>
  </div>
)
