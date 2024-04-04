import { Stack, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
//Srcs

export default function Home() {
  return (
    <div className="home-page">
      <Stack direction="column" spacing={4}>
        <Text className="invitation-title">ពិធីរៀបអាពាហ៍ពិពាហ៍</Text>
        <Stack direction="row" justifyContent="center">
          <Image
            src="../../Images/bride-and-groom.png"
            alt="header-img"
            className="invitation-img"
          />
        </Stack>
        <Text className="invitation-des">សូមគោរពអញ្ជើញ</Text>
        <Text className="invitation-des">ឯកឧត្តម និងលោកជំទាវ</Text>

        <Stack direction="row" justifyContent="center">
          <Link href="/Introduction" passHref>
            <Button className="button-to-open">សូមចុចដើម្បីបើកសំបុត្រ</Button>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
}
