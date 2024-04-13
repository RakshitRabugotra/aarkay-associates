// Internal Dependencies
import Error from "@/components/Error";

// Content Dependencies
import { ERROR } from "@constants";

export default function NotFound() {
  return <Error error={ERROR.e404}/>
}
