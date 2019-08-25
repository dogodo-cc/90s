import io from "./io";

export function meeting(id) {
  return io.get(`/api/meetings/${id}`);
}