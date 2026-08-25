import { createFileRoute } from '@tanstack/react-router'
import termsPdfAsset from '@/assets/podmienky-ambasadorskeho-programu.pdf.asset.json'

export const Route = createFileRoute('/api/public/podmienky')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin
        const upstream = await fetch(new URL(termsPdfAsset.url, origin).toString())

        if (!upstream.ok) {
          return new Response('PDF not found', { status: 404 })
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition':
              'inline; filename="podmienky-ambasadorskeho-programu.pdf"',
            'Cache-Control': 'public, max-age=3600',
          },
        })
      },
    },
  },
})
