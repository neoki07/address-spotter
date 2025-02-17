const prefecturePattern = '(?:北海道|東京都|(?:京都|大阪)府|(?:神奈川|和歌山|鹿児島)県|(?:青森|岩手|宮城|秋田|山形|福島|茨城|栃木|群馬|埼玉|千葉|新潟|富山|石川|福井|山梨|長野|岐阜|静岡|愛知|三重|滋賀|兵庫|奈良|鳥取|島根|岡山|広島|山口|徳島|香川|愛媛|高知|福岡|佐賀|長崎|熊本|大分|宮崎|沖縄)県)';

const cityPattern = '(?:[^都道府県]+?[市区町村])';

const addressPattern = '(?:[0-9０-９一二三四五六七八九十百千]-?[0-9０-９一二三四五六七八九十百千-]+(?:丁目|番地|番)?(?:-[0-9０-９一二三四五六七八九十百千]+)?)|(?:[^0-9０-９一二三四五六七八九十百千\n]+?町[0-9０-９一二三四五六七八九十百千-]+)|(?:[^0-9０-９一二三四五六七八九十百千\n]+?[0-9０-９一二三四五六七八九十百千-]+(?:丁目|番地|番)?)';

const addressRegex = new RegExp(
  `${prefecturePattern}${cityPattern}(?:${addressPattern})?`,
  'g'
);

export function detectAddresses(text: string): string[] {
  const matches = text.match(addressRegex);
  return matches ? Array.from(new Set(matches)) : [];
}

export function isLikelyAddress(text: string): boolean {
  return addressRegex.test(text);
}
