import type { Locale } from "@/lib/i18n";
import type { TrackCard } from "@/lib/content";

export function spectrumStages(cards: TrackCard[], locale: Locale) {
  const ar = locale === "ar";
  const capabilities = ar ? [
    ["شرح فكرة ومدخلاتها ونتيجتها المطلوبة", "قراءة صفحة بسيطة وتعديل HTML وCSS وJavaScript", "تقسيم مشكلة إلى خطوات والتحقق من صحة الإجابة"],
    ["كتابة توجيهات واضحة واختيار السياق المناسب", "ربط واجهة وخادم وواجهة برمجية ونشر تطبيق صغير", "استخدام GitHub والمهارات والخطافات وتشخيص الأخطاء"],
    ["بناء وكيل يستخدم أدوات وذاكرة لإنجاز مهمة", "تشغيل حلقات تقييم وتنفيذ بشروط توقف واضحة", "نشر خدمة وكلاء واختبارها والتعافي من الإخفاقات"],
    ["اختيار بنية الوكلاء المناسبة لمشكلة عمل حقيقية", "تنسيق أسراب الوكلاء وقياس الجودة والوقت والتكلفة", "تشغيل تحسين ذاتي مقاس مع اختبار مستقل وتراجع عن التغييرات"]
  ] : [
    ["Explain an idea, its inputs, and the expected result", "Read and make small HTML, CSS, and JavaScript changes", "Break a problem into steps and check an answer"],
    ["Write clear prompts and select useful context", "Connect a frontend, backend, and API; deploy a small app", "Use GitHub, skills, and hooks; diagnose errors"],
    ["Build a tool-using agent with memory for a real task", "Run action and evaluation loops with clear stop conditions", "Deploy an agent service, test it, and recover failures"],
    ["Choose an agent architecture for a real business problem", "Coordinate agent swarms and measure quality, time, and cost", "Operate measured self-improvement with independent tests and rollback"]
  ];
  const proofs = ar ? [
    "صف مهمة واقعية وعدّل صفحة ويب بسيطة. هذه معارف مطلوبة قبل الانضمام.",
    "تطبيق منشور يستدعي نموذجاً أو أداة، مع حالات اختبار وسجلات أخطاء.",
    "خدمة وكيل متكاملة بذاكرة وأدوات ومراقبة وحدود تكلفة واختبارات.",
    "نظام منسّق يثبت تحسناً مقارنة بوكيل واحد، مع تجربة تحسين قابلة للتراجع."
  ] : [
    "Describe a real task and edit a simple webpage. This knowledge is required before joining.",
    "A deployed app that calls a model or tool, with test cases and error logs.",
    "A complete agent service with memory, tools, monitoring, budgets, and evaluations.",
    "A coordinated system that improves on a single-agent baseline, with a reversible improvement experiment."
  ];
  const proficient: TrackCard = {
    id: "builder", num: "04", kind: "agents",
    title: ar ? "المتمكّن" : "Proficient", sub: "OPERATE & EVOLVE",
    desc: ar ? "انتقل من بناء الوكلاء إلى امتلاك أنظمة موثوقة وتطويرها في بيئة العمل." : "Move from building agents to owning reliable systems and evolving them in real operations.",
    weeks: "", level: "", outcomes: capabilities[3],
    modules: [
      { title: ar ? "هندسة الأسراب" : "Swarm architecture", desc: ar ? "التفويض والتنسيق وحل تعارض النتائج وإدارة السياق المشترك." : "Delegation, coordination, conflict resolution, and shared context." },
      { title: ar ? "التشغيل على نطاق أوسع" : "Operating at scale", desc: ar ? "الطوابير والتزامن والمراقبة والتكلفة والاستجابة للحوادث." : "Queues, concurrency, observability, cost control, and incident response." },
      { title: ar ? "التحسين الذاتي" : "Self-improvement", desc: ar ? "تجارب مستقلة ومقارنة النتائج واعتماد التغييرات أو التراجع عنها. التحسين التكراري المفتوح مجال تجريبي." : "Independent experiments, comparisons, and controlled releases or rollback. Open-ended recursive improvement remains experimental." }
    ]
  };
  return [...cards, proficient].map((card, index) => ({
    ...card, key: ["readiness", "basics", "advanced", "proficient"][index],
    capabilities: capabilities[index], proof: proofs[index],
    modules: index === 2 ? card.modules.slice(0, 3).concat(card.modules.slice(4, 5)) : card.modules
  }));
}
