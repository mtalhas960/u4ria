// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('blog').title('Blog Posts'),
      S.documentTypeListItem('retreat').title('Retreats'),
      S.documentTypeListItem('gallery').title('Gallery'),
    ])
