export class MockData {
  public static categories = [
    "Administration",
    "Mathématiques",
    "Entreprise",
    "Législation",
    "FIL",
    "ITII",
    "Projet Agile",
    "Bipbapbop",
  ];

  public static description = `
        <h2>Est dolorem</h2>
        <p>
          Ut omnis nostrum sit nihil Quis vel blanditiis dolor rem libero galisum. Aut veniam aliquid aut porro nemo
          et quibusdam atque? Aut ipsa rerum et adipisci aperiam aut impedit veritatis! Quo molestiae officiis 33 nulla
          et repellat libero nam accusamus voluptatem aut aspernatur possimus 33 nobis sunt. Est dolorem dolorem et
          excepturi explicabo Ea animi ut quaerat sapiente.
        </p>
        <br>
        <h2>Quo dolore</h2>
        <p>
          Ut omnis nostrum sit nihil Quis vel blanditiis dolor rem libero galisum. Aut veniam aliquid aut porro nemo
          et quibusdam atque? Aut ipsa rerum et adipisci aperiam aut impedit veritatis! Quo molestiae officiis 33 nulla
          et repellat libero nam accusamus voluptatem aut aspernatur possimus 33 nobis sunt. Est dolorem dolorem et
          excepturi explicabo Ea animi ut quaerat sapiente.
        </p>
        <br>
        <h2>Quo molestiae</h2>
        <p>
          Ut omnis nostrum sit nihil Quis vel blanditiis dolor rem libero galisum. Aut veniam aliquid aut porro nemo
          et quibusdam atque? Aut ipsa rerum et adipisci aperiam aut impedit veritatis! Quo molestiae officiis 33 nulla
          et repellat libero nam accusamus voluptatem aut aspernatur possimus 33 nobis sunt. Est dolorem dolorem et
          excepturi explicabo Ea animi ut quaerat sapiente.
        </p>
      `;

  public static questions = [
    {
      id: "0",
      groupId: "",
      categoryId: "",
      title: "Vestibulum ac condimentum metus ?",
      content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus
          nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum commodo.
          Suspendisse potenti. Duis ac velit at libero efficitur ullamcorper ac
          efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh.
          Aliquam vitae rutrum mi, a fermentum elit.`,
      userName: "User Name",
      createdAt: "24 Mai 2022",
      bestAnswer: null,
      categories: ["Administration", "Législation"],
    },
    {
      groupId: "",
      id: "1",
      title: "Vestibulum ac condimentum metus ?",
      description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus
          nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum commodo.
          Suspendisse potenti. Duis ac velit at libero efficitur ullamcorper ac
          efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh.
          Aliquam vitae rutrum mi, a fermentum elit.`,
      userName: "User Name",
      date: "24 Mai 2022",
      bestAnswer: {
        content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus nulla. Vivamus tempus diam et
            ligula finibus, vitae feugiat ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
            ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh. Aliquam vitae
            rutrum mi, a fermentum elit.`,
        user: "Bip Bap",
        date: "24 Mai 2022",
        voteCount: 8,
      },
      categories: ["Mathématiques"],
    },
  ];

  public static question = {
    id: 10,
    title: "Vestibulum ac condimentum metus ?",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus
      nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum commodo.
      Suspendisse potenti. Duis ac velit at libero efficitur ullamcorper ac
      efficitur risus. Donec cursus pharetra vulputate. Donec eu imperdiet nibh.
      Aliquam vitae rutrum mi, a fermentum elit.`,
    user: "User Name",
    date: "24 Mai 2022",
  };

  public static answers = [
    {
      id: 3,
      content: `        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        lacus nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum
        ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
        ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec
        eu imperdiet nibh. Aliquam vitae rutrum mi, a fermentum elit.`,
      user: "Bip Bap",
      date: "24 Mai 2022",
      voteCount: 8,
    },
    {
      id: 19329,
      content: `        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        lacus nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum
        ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
        ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec
        eu imperdiet nibh. Aliquam vitae rutrum mi, a fermentum elit.`,
      user: "Bip Bap",
      date: "25 Mai 2022",
      voteCount: 2,
    },
    {
      id: 20233,
      content: `        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        lacus nulla. Vivamus tempus diam et ligula finibus, vitae feugiat ipsum
        ipsum commodo. Suspendisse potenti. Duis ac velit at libero efficitur
        ullamcorper ac efficitur risus. Donec cursus pharetra vulputate. Donec
        eu imperdiet nibh. Aliquam vitae rutrum mi, a fermentum elit.`,
      user: "Bip Bap",
      date: "26 Mai 2022",
      voteCount: 1,
    },
  ];

  public static comments = [
    {
      id: 1,
      content: "Done cursus pharetra vulputate. Donec eu imperdiet nibh.",
      date: "24 Mai 2022",
      user: "Bop Bap",
      voteCount: 4,
    },
    {
      id: 5,
      content: "Done cursus pharetra vulputate. Donec eu imperdiet nibh.",
      date: "24 Mai 2022",
      user: "Bop Bap",
      voteCount: 2,
    },
    {
      id: 2,
      content: "Done cursus pharetra vulputate. Donec eu imperdiet nibh.",
      date: "24 Mai 2022",
      user: "Bop Bap",
      voteCount: 1,
    },
  ];
}
