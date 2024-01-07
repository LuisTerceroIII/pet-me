import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired - required for Server Components
  const {data: {session}} = await supabase.auth.getSession()

  // added this ugly hack due to https://github.com/orgs/supabase/discussions/16135#discussioncomment-6642592
  if (session) {
    res.cookies.set('supabase.auth.token', session.access_token)
    res.cookies.set('supabase.auth.refresh_token', session.refresh_token)
  } else if (req.cookies.get('supabase.auth.token')) {
    const response = await supabase.auth.refreshSession({
      refresh_token: req.cookies.get('supabase.auth.refresh_token')!.value,
    })
  }

  console.log("Middleware",req.url, JSON.stringify(session))

  return res
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    "/"
  ],
}