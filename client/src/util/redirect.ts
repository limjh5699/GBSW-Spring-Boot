import { useRouter } from "next/router";

export default function useRedirectTo(url: string) {
  const router = useRouter();
  router.push(url);
}
