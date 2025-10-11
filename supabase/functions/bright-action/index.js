// Setup type definitions for Supabase Edge Runtime
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// Minimal ambient declaration so TypeScript/VS Code (non-Deno workspace) stops
// complaining about the global `Deno`. This file runs on Supabase Edge/Deno
// at deploy time, so we keep the runtime call but provide a small local


Deno.serve(async () => {
  console.log("Bright action triggered!");

  return new Response(
    JSON.stringify({ message: "Bright action executed successfully!" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
});
