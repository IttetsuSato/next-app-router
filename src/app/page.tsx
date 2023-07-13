"use client";

import { Link, Text } from "@nextui-org/react";
import NextLink from "next/link";

export default function Home() {
  console.log("hello");
  return (
    <>
      <Text
        h1
        size={48}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Hello
      </Text>
      <Link as={NextLink} href="/sample" block>
        Go to Sample
      </Link>
    </>
  );
}
