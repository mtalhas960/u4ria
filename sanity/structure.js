export const structure = (S) =>
  S.list()
    .title('Dashboard | U4RIA')
    .items([
      S.listItem()
        .title('Site Content')
        .child(
          S.list()
            .title('Site Content')
            .items([
              S.listItem()
                .title('Offer Modal')
                .child(
                  S.editor()
                    .id('offer')
                    .schemaType('offer')
                    .documentId('singleton-offer')
                ),
              S.listItem()
                .title('Hero Section')
                .child(
                  S.editor()
                    .id('hero')
                    .schemaType('hero')
                    .documentId('singleton-hero')
                ),
              S.listItem()
                .title('Join Us Section')
                .child(
                  S.editor()
                    .id('join')
                    .schemaType('join')
                    .documentId('singleton-join')
                ),
              S.listItem()
                .title('Welcome Section')
                .child(
                  S.editor()
                    .id('welcome')
                    .schemaType('welcome')
                    .documentId('singleton-welcome')
                ),
              S.listItem()
                .title('Features Section')
                .child(
                  S.editor()
                    .id('feature')
                    .schemaType('feature')
                    .documentId('singleton-feature')
                ),
              S.listItem()
                .title('Reviews Section')
                .child(
                  S.editor()
                    .id('reviews')
                    .schemaType('reviews')
                    .documentId('singleton-reviews')
                ),
              S.listItem()
                .title('Partnership Section')
                .child(
                  S.editor()
                    .id('partnership')
                    .schemaType('partnership')
                    .documentId('singleton-partnership')
                ),
            ])
        ),
      S.documentTypeListItem('blog').title('Blog Posts'),
      S.documentTypeListItem('retreat').title('Retreats'),
      S.documentTypeListItem('gallery').title('Gallery'),
      S.documentTypeListItem('coment').title('Coments'),
      S.documentTypeListItem('testimonial').title('App Reviews'),
    ])