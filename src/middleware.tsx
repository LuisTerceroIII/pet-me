import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  const {data} = await supabase.auth.getSession()

  console.log("Middleware",req.url, JSON.stringify(data))

  return res
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    "/"
  ],
}