const categories = [
    {
    id: "luxury-cars",
    label: "Luxury Cars",
    folder: "luxurious Cars",
    images: [
      "1769818634670.jpg",
      "1769819218197.jpg",
      "1769819365531.jpg",
      "1769819435028.jpg",
      "1769819539884.jpg",
      "1769819693222.jpg",
      "1769819825304.jpg",
      "1769820076611.jpg",
      "1769882736802.jpg",
      "1769882864571.jpg",
      "1769882955833.jpg",
      "1769883097744.jpg",
      "1769883272558.jpg",
      "1769883623627.jpg",
      "1769884043997.jpg",
      "1769885220169.jpg",
      "1769885892689.jpg",
      "1769886077760.jpg",
      "1769886205600.jpg",
      "1769886344979.jpg",
      "1769886532229.jpg",
      "1769886801068.jpg",
      "1769886922522.jpg",
      "1770494944317.jpg",
    ],
  },
  {
    
    id: "view",
    label: "Featured Views",
    folder: "View",
    images: [
      "1769818122630.jpg",
      "1769818342970.jpg",
      "1769892754285.jpg",
      "1769892865669.jpg",
      "1769892966894.jpg",
      "1769903805859.jpg",
      "1769904296375.jpg",
      "1769904973426.jpg",
      "1769944220368.jpg",
      "1769944329963.jpg",
      "1769982527922.jpg",
      "1769983411996.jpg",
    ],
  },
  {
    id: "anime",
    label: "Anime Portraits",
    folder: "Anime Girl",
    images: [
      "1769983697305.jpg",
      "1769985090912.jpg",
      "1769985389140.jpg",
      "1769986042453.jpg",
      "1769986508843.jpg",
      "1769986752736.jpg",
      "1769987044933.jpg",
      "1769987200376.jpg",
      "1769987562641.jpg",
      "1769987836414.jpg",
      "1769987969630.jpg",
      "1769988580828.jpg",
      "1769988741677.jpg",
      "1769989229330.jpg",
      "1769989599156.jpg",
      "1769989979843.jpg",
      "1769990120226.jpg",
      "1769990355461.jpg",
      "1769990535779.jpg",
      "1769990680550.jpg",
      "1769990853643.jpg",
      "1769991434416.jpg",
      "1769991898957.jpg",
      "1769992325284.jpg",
      "1769992459667.jpg",
      "1769992723415.jpg",
      "1769993126111.jpg",
      "1769993284547.jpg",
      "1769993885338.jpg",
      "1769993995238.jpg",
      "1769994411939.jpg",
      "1769994533401.jpg",
      "1769994638438.jpg",
      "1769995000034.jpg",
      "1769995149415.jpg",
      "1769995344805.jpg",
    ],
  },
  {
    id: "textures",
    label: "Texture Studies",
    folder: "Background Texture",
    images: [
      "1769894665468.jpg",
      "1769895164363.jpg",
      "1769895675043.jpg",
      "1769896446226.jpg",
      "1769902507500.jpg",
    ],
  },
  {
    id: "custom-cars",
    label: "Custom Rides",
    folder: "Customized Cars",
    images: [
      "1769887058459.jpg",
      "1769819028126.jpg",
      "1769887782704.jpg",
      "1769887866027.jpg",
      "1769888400582.jpg",
      "1769888690478.jpg",
      "1769888837902.jpg",
      "1769889043317.jpg",
      "1769889514082.jpg",
      "1769889613955.jpg",
      "1769889839798.jpg",
      "1769889996349.jpg",
      "1769890116297.jpg",
      "1769890253796.jpg",
      "1769890547049.jpg",
      "1769890666829.jpg",
      "1769890770754.jpg",
      "1769890936917.jpg",
      "1769891443505.jpg",
      "1769891576489.jpg",
      "1769891756580.jpg",
      "1769892025080.jpg",
    ],
  },
  {
    id: "food",
    label: "Food Studio",
    folder: "Food",
    images: [
      "1769896885856.jpg",
      "1769896995742.jpg",
      "1769897252805.jpg",
      "1769902211657.jpg",
      "1769903307324.jpg",
      "1769905405648.jpg",
      "1769946985811.jpg",
      "1769974070942.jpg",
      "1769974877614.jpg",
      "1769975165603.jpg",
      "1769975740451.jpg",
      "1769976034622.jpg",
      "1769976749741.jpg",
      "1769976945603.jpg",
      "1769977303058.jpg",
    ],
  },
  {
    id: "india",
    label: "India Travel",
    folder: "India",
    images: [
      "1769810425326.jpg",
      "1769810625542.jpg",
      "1769810965854.jpg",
      "1769811460130.jpg",
      "1769816160231.jpg",
      "1769816263895.jpg",
      "1769904618148.jpg",
      "1769904827619.jpg",
      "1769905721251.jpg",
    ],
  },
  {
    id: "office",
    label: "Office Concepts",
    folder: "Office",
    images: [
      "1769813225930.jpg",
      "1769814877250.jpg",
      "1769815239424.jpg",
      "1769815592431.jpg",
      "1769892254519.jpg",
      "1769892536111.jpg",
      "1769893241941.jpg",
      "1769893537264.jpg",
      "1769893970629.jpg",
      "1769894079688.jpg",
      "1769894263642.jpg",
      "1769894442436.jpg",
    ],
  },
  {
    id: "other",
    label: "Experiments",
    folder: "Other",
    images: [
      "1769814752385.jpg",
      "1769816030817.jpg",
      "1769816971463.jpg",
      "1769817082130.jpg",
      "1769817195802.jpg",
      "1769817339830.jpg",
      "1769817921926.jpg",
      "1769897739166.jpg",
      "1769907483241.jpg",
      "1769907831898.jpg",
      "1769940604278.jpg",
      "1769941183412.jpg",
      "1769944862849.jpg",
      "1769945073939.jpg",
      "1769945448176.jpg",
      "1769979959756.jpg",
      "1769983065163.jpg",
    ],
  },
];

const tabs = document.querySelector(".tabs");
const gallery = document.querySelector(".gallery");

function createTabs() {
  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.className = "tab";
    button.type = "button";
    button.textContent = category.label;
    button.dataset.category = category.id;
    button.setAttribute("role", "tab");
    button.addEventListener("click", () => setActiveCategory(category.id));
    if (index === 0) {
      button.classList.add("active");
    }
    tabs.appendChild(button);
  });
}

function setActiveCategory(categoryId) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.category === categoryId);
  });

  const active = categories.find((item) => item.id === categoryId);
  if (!active) return;

  gallery.innerHTML = "";
  const fragment = document.createDocumentFragment();

  active.images.forEach((image, index) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";

    if (index % 7 === 0) {
      figure.classList.add("wide");
    } else if (index % 5 === 0) {
      figure.classList.add("tall");
    }

    const img = document.createElement("img");
    img.loading = index < 6 ? "eager" : "lazy";
    img.decoding = "async";
    img.alt = `${active.label} ${index + 1}`;
    img.addEventListener("load", () => {
      figure.classList.add("reveal");
    });
    img.src = `${active.folder}/${image}`;

    figure.appendChild(img);
    fragment.appendChild(figure);
  });

  gallery.appendChild(fragment);

  const items = [...gallery.querySelectorAll(".gallery-item")];
  if (items.length === 0) return;
}

function initLiquidCanvas() {
  const canvas = document.getElementById("liquid-canvas");
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let time = 0;
  let lastTime = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 1.25);

  const blobs = Array.from({ length: 4 }).map((_, index) => ({
    radius: 220 + index * 60,
    speed: 0.002 + index * 0.0007,
    offset: index * 2.1,
  }));

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(now) {
    if (!lastTime) lastTime = now;
    const delta = now - lastTime;
    if (delta < 16) {
      requestAnimationFrame(draw);
      return;
    }
    lastTime = now;
    time += 1;
    ctx.clearRect(0, 0, width, height);

    blobs.forEach((blob, index) => {
      const x = width * 0.5 + Math.sin(time * blob.speed + blob.offset) * width * 0.25;
      const y = height * 0.5 + Math.cos(time * blob.speed + blob.offset) * height * 0.22;
      const gradient = ctx.createRadialGradient(x, y, blob.radius * 0.2, x, y, blob.radius);
      gradient.addColorStop(0, `rgba(94, 232, 255, ${0.18 - index * 0.02})`);
      gradient.addColorStop(1, "rgba(10, 12, 24, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, blob.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  requestAnimationFrame(draw);
  window.addEventListener("resize", resize);
}

createTabs();
setActiveCategory(categories[0].id);
initLiquidCanvas();

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("hidden");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

[...document.querySelectorAll("section")].forEach((section) => observer.observe(section));
