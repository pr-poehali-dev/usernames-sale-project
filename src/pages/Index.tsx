import { useState } from "react";
import Icon from "@/components/ui/icon";

const friends = [
  {
    id: 1,
    username: "@nastya_life",
    name: "Настя",
    emoji: "🌸",
    photo: "https://cdn.poehali.dev/projects/fa594141-9070-4062-8094-2e9997d3ba58/bucket/da55e6be-e851-4c74-aa05-8694a7b50c76.jpg",
    description: "Моя лучшая подруга с первого класса. Любит кофе, закаты и долгие прогулки по городу. Всегда знает, что сказать в нужный момент.",
    tags: ["кофе", "фото", "мода"],
    color: "#f472b6",
    price: 250,
  },
  {
    id: 2,
    username: "@dasha.ok",
    name: "Даша",
    emoji: "✨",
    photo: "https://cdn.poehali.dev/projects/fa594141-9070-4062-8094-2e9997d3ba58/bucket/a622a82d-f98e-4b2e-8b10-76c082a3c46c.jpg",
    description: "Художница и мечтательница. Рисует акварелью и знает все лучшие кафе в городе. С ней всегда весело и творчески.",
    tags: ["арт", "кафе", "музыка"],
    color: "#c084fc",
    price: 350,
  },
  {
    id: 3,
    username: "@masha.world",
    name: "Маша",
    emoji: "🦋",
    photo: "https://cdn.poehali.dev/projects/fa594141-9070-4062-8094-2e9997d3ba58/bucket/1dd1686b-a845-4c92-b88b-e902e093b819.jpg",
    description: "Спортсменка и путешественница. Уже побывала в 12 странах и не собирается останавливаться. Вдохновляет своей энергией.",
    tags: ["тревел", "спорт", "фитнес"],
    color: "#fb923c",
    price: 250,
  },
  {
    id: 4,
    username: "@lera.vibes",
    name: "Лера",
    emoji: "🌙",
    photo: "https://cdn.poehali.dev/projects/fa594141-9070-4062-8094-2e9997d3ba58/bucket/4dc18350-d588-472c-b213-85310c5b4334.jpg",
    description: "Книжный червь и философ. Знает ответы на все вопросы или делает вид. Лучший собеседник в 3 ночи.",
    tags: ["книги", "кино", "чай"],
    color: "#34d399",
    price: 250,
  },
  {
    id: 5,
    username: "@sonya.cool",
    name: "Соня",
    emoji: "🍒",
    photo: "https://cdn.poehali.dev/projects/fa594141-9070-4062-8094-2e9997d3ba58/bucket/10acab54-2e25-40b9-8654-476227945db6.jpg",
    description: "Танцовщица и вечная оптимистка. Умеет превратить любой вечер в праздник. Самая заразительная улыбка в компании.",
    tags: ["танцы", "вечеринки", "стиль"],
    color: "#f87171",
    price: 250,
  },
];

const AvatarPlaceholder = ({ name, emoji, color }: { name: string; emoji: string; color: string }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center"
    style={{ background: `radial-gradient(circle at 30% 30%, ${color}33, ${color}11)` }}
  >
    <span className="text-5xl mb-2">{emoji}</span>
    <span className="text-white/40 text-xs font-light tracking-widest uppercase">{name}</span>
  </div>
);

export default function Index() {
  const [activeSection, setActiveSection] = useState<"home" | "catalog">("home");
  const [selectedFriend, setSelectedFriend] = useState<typeof friends[0] | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/5">
        <button
          onClick={() => setActiveSection("home")}
          className="font-cormorant text-xl tracking-wider"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#f472b6" }}
        >
          Girls Club
        </button>
        <div className="flex items-center gap-1">
          {(["home", "catalog"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`px-4 py-1.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                activeSection === s
                  ? "text-black font-medium"
                  : "text-white/40 hover:text-white/70"
              }`}
              style={activeSection === s ? { background: "#f472b6" } : {}}
            >
              {s === "home" ? "Главная" : "Подруги"}
            </button>
          ))}
        </div>
      </nav>

      {/* HOME */}
      {activeSection === "home" && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">

          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(244,114,182,0.12), transparent 70%)" }} />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(192,132,252,0.10), transparent 70%)" }} />

          <div className="absolute w-[600px] h-[600px] rounded-full animate-spin-slow pointer-events-none opacity-20"
            style={{ border: "1px solid rgba(244,114,182,0.3)", borderTopColor: "transparent" }} />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 animate-fade-up"
              style={{ background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.2)" }}>
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#f472b6" }}>
                ✦ Наша компания ✦
              </span>
            </div>

            <h1 className="mb-4 animate-fade-up delay-100"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 10vw, 7rem)",
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "#f5f0ea",
              }}>
              Girls
              <span className="shimmer-text italic block">Club.</span>
            </h1>

            <p className="text-sm tracking-widest text-white/40 uppercase mb-10 animate-fade-up delay-200"
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.25em" }}>
              — маленький мир больших подруг —
            </p>

            <p className="text-white/60 mb-12 leading-relaxed animate-fade-up delay-300 max-w-md mx-auto"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}>
              Здесь живут самые лучшие люди в моей жизни. Каждая — отдельная вселенная.
            </p>

            <div className="flex items-center gap-4 justify-center animate-fade-up delay-400">
              <button
                onClick={() => setActiveSection("catalog")}
                className="px-8 py-3 rounded-full font-medium text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 animate-glow"
                style={{
                  background: "linear-gradient(135deg, #f472b6, #c084fc)",
                  color: "#0a0a0a",
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                Смотреть подруг
              </button>
              <button
                className="px-8 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-300 hover:border-pink-400 hover:text-pink-400"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                О нас
              </button>
            </div>

            <div className="flex items-center justify-center gap-12 mt-16 animate-fade-up delay-500">
              {[
                { num: friends.length, label: "подруг" },
                { num: "∞", label: "воспоминаний" },
                { num: "💅", label: "стиль" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2rem",
                    color: "#f472b6",
                    fontWeight: 300,
                  }}>{s.num}</div>
                  <div className="text-white/30 text-xs tracking-widest uppercase mt-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float opacity-30">
            <span className="text-xs tracking-widest uppercase text-white/40"
              style={{ fontFamily: "'Montserrat', sans-serif" }}>scroll</span>
            <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #f472b6, transparent)" }} />
          </div>
        </section>
      )}

      {/* CATALOG */}
      {activeSection === "catalog" && (
        <section className="min-h-screen pt-24 pb-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16 animate-fade-up">
              <p className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ color: "#f472b6", fontFamily: "'Montserrat', sans-serif" }}>
                ✦ Мои подруги ✦
              </p>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 300,
                color: "#f5f0ea",
                lineHeight: 1,
              }}>
                Каталог <span className="shimmer-text italic">подруг</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {friends.map((friend, i) => (
                <button
                  key={friend.id}
                  onClick={() => setSelectedFriend(friend)}
                  className="group relative overflow-hidden rounded-2xl text-left transition-all duration-500 hover:scale-[1.02] animate-fade-up"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    animationDelay: `${i * 0.08}s`,
                    animationFillMode: "both",
                    opacity: 0,
                  }}>

                  <div className="relative h-64 overflow-hidden">
                    {friend.photo ? (
                      <img
                        src={friend.photo}
                        alt={friend.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <AvatarPlaceholder name={friend.name} emoji={friend.emoji} color={friend.color} />
                    )}
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, #111111 0%, transparent 55%)" }} />

                    {/* Price badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: friend.price === 350
                          ? "linear-gradient(135deg, #c084fc, #818cf8)"
                          : "linear-gradient(135deg, #f472b6, #fb923c)",
                        color: "#fff",
                        fontFamily: "'Montserrat', sans-serif",
                        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
                      }}>
                      {friend.price} ₽
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center glass text-lg">
                      {friend.emoji}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        color: "#f5f0ea",
                      }}>
                        {friend.name}
                      </h3>
                      <span className="text-xs" style={{ color: friend.color, fontFamily: "'Montserrat', sans-serif" }}>
                        {friend.username}
                      </span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                      {friend.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {friend.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs"
                          style={{
                            background: `${friend.color}15`,
                            color: friend.color,
                            border: `1px solid ${friend.color}30`,
                            fontFamily: "'Montserrat', sans-serif",
                          }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: `linear-gradient(to right, transparent, ${friend.color}, transparent)` }} />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROFILE MODAL */}
      {selectedFriend && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedFriend(null)}>
          <div
            className="profile-modal w-full max-w-lg rounded-3xl overflow-hidden"
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: `0 0 80px ${selectedFriend.color}20`,
            }}
            onClick={(e) => e.stopPropagation()}>

            <div className="relative h-72">
              {selectedFriend.photo ? (
                <img
                  src={selectedFriend.photo}
                  alt={selectedFriend.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <AvatarPlaceholder name={selectedFriend.name} emoji={selectedFriend.emoji} color={selectedFriend.color} />
              )}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #111111 0%, transparent 50%)" }} />

              <button
                onClick={() => setSelectedFriend(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center glass hover:bg-white/10 transition-colors">
                <Icon name="X" size={16} />
              </button>

              {/* Price in modal */}
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold"
                style={{
                  background: selectedFriend.price === 350
                    ? "linear-gradient(135deg, #c084fc, #818cf8)"
                    : "linear-gradient(135deg, #f472b6, #fb923c)",
                  color: "#fff",
                  fontFamily: "'Montserrat', sans-serif",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
                }}>
                {selectedFriend.price} ₽
              </div>

              <div className="absolute bottom-4 left-6 text-4xl animate-float">
                {selectedFriend.emoji}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.2rem",
                  fontWeight: 400,
                  color: "#f5f0ea",
                }}>
                  {selectedFriend.name}
                </h2>
                <span style={{ color: selectedFriend.color, fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem" }}>
                  {selectedFriend.username}
                </span>
              </div>

              <p className="text-white/60 leading-relaxed mb-5"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: "0.9rem" }}>
                {selectedFriend.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedFriend.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: `${selectedFriend.color}15`,
                      color: selectedFriend.color,
                      border: `1px solid ${selectedFriend.color}30`,
                      fontFamily: "'Montserrat', sans-serif",
                    }}>
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={`https://t.me/People_5212?text=Привет! Хочу узнать про ${selectedFriend.name} (${selectedFriend.username}) · ${selectedFriend.price} ₽`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-medium text-sm tracking-wider uppercase transition-all hover:opacity-90"
                style={{
                  background: selectedFriend.price === 350
                    ? "linear-gradient(135deg, #c084fc, #818cf8)"
                    : "linear-gradient(135deg, #f472b6, #fb923c)",
                  color: "#fff",
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                Написать менеджеру · {selectedFriend.price} ₽ ✈️
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}