const Sponsors = () => {
  // SPONSORS LIST:
  const sponsorsList = [
    {
      url: 'https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png',
    },
    {
      url: 'https://ww1.freelogovectors.net/wp-content/uploads/2023/03/dhaka-university-logo-freelogovectors.net_.png',
    },
    {
      url: 'https://prod-discovery.edx-cdn.org/organization/logos/2a73d2ce-c34a-4e08-8223-83bca9d2f01d-2cc8854c6fee.png',
    },
    {
      url: 'https://prod-discovery.edx-cdn.org/organization/logos/a7e2febc-e366-4b23-9fc3-5659cf53d452-fbcc652f58e1.png',
    },
    {
      url: 'https://prod-discovery.edx-cdn.org/organization/logos/31705519-3082-4c18-aa23-1caf9a038b1c-21ab36bd68bc.png',
    },
    {
      url: 'https://prod-discovery.edx-cdn.org/organization/logos/8554749f-b920-4d7f-8986-af6bb95290aa-f336c6a2ca11.png',
    },
    {
      url: 'https://prod-discovery.edx-cdn.org/organization/logos/0d58600d-bb5f-4036-b222-b770d238331a-f11f10a8cbbc.png',
    },
    {
      url: 'https://prod-discovery.edx-cdn.org/organization/logos/75831d72-095d-4fa8-9d79-88782a11fe9f-aeea98004d23.png',
    },
  ];

  return (
    <div className="alpha-container mt-20 flex flex-row justify-center gap-2 xl:gap-5 2xl:gap-10 items-center">
      {sponsorsList &&
        sponsorsList.map((image, index) => (
          <img key={index} src={image.url} alt="" className="w-32 h-16 opacity-60 hover:opacity-100" />
        ))}
    </div>
  );
};

export default Sponsors;
