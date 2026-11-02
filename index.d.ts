declare module '#app' {
  interface PageMeta {
    layoutData: {
      mainImage: string
      name: string
      title: string
      breadcrumbs: {
        name: string
        path: string
      }[]
    }
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    layoutData: {
      mainImage: string
      name: string
      title: string
      breadcrumbs: {
        name: string
        path: string
      }[]
    }
  }
}

export { }
