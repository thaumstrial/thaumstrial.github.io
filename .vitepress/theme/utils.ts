import { withBase } from 'vitepress'
import { useData } from 'vitepress'

function normalizeLink(url: string): string {
    const { pathname, search, hash, protocol } = new URL(url, 'http://a.com')

    const { site } = useData()

    const normalizedPath =
        pathname.endsWith('/') || pathname.endsWith('.html')
            ? url
            : url.replace(
                /(?:(^\.+)\/)?.*$/,
                `$1${pathname.replace(
                    /(\.md)?$/,
                    site.value.cleanUrls ? '' : '.html'
                )}${search}${hash}`
            )

    return withBase(normalizedPath)
}

export default normalizeLink