function Header({
  systemMode,
  setSystemMode,
  viewMode,
  setViewMode,
  setSelectedCriteriaId,
  setDraftData,
  handleSaveAllToFirebase,
  isSaving,
  draftCount,
  setShowApiKeyModal,
  apiKey
}) {
  return (
    <header className="bg-indigo-900 text-white p-4 md:p-6 shadow-xl border-b-4 border-indigo-700 w-full">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 px-4">

        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/20 rounded-xl">🎓</div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black uppercase leading-none tracking-tight">
              ĐÁNH GIÁ THƯỜNG XUYÊN
            </h1>
            <span className="text-indigo-300 text-[11px] font-bold uppercase mt-1 italic tracking-wider">
              CHUYỂN ĐỔI SỐ TRONG CÔNG TÁC ĐÁNH GIÁ Ở TIỂU HỌC
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">

          <div className="flex bg-indigo-950/50 p-1 rounded-xl gap-1 items-center">

            {['smas', 'vnedu'].map(sys => (
              <button
                key={sys}
                onClick={() => {
                  setSystemMode(sys);
                  setSelectedCriteriaId('');
                  setDraftData({});
                }}
                className={`px-6 py-2.5 rounded-lg text-[11px] font-black uppercase transition-all ${
                  systemMode === sys
                    ? 'bg-white text-indigo-900 shadow-lg'
                    : 'text-indigo-300 hover:text-white'
                }`}
              >
                🌐 {sys}
              </button>
            ))}

            <div className="w-px h-6 bg-indigo-700 mx-1"></div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleSaveAllToFirebase}
                disabled={isSaving || draftCount === 0}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-l-lg text-[11px] font-black uppercase transition-all shadow-md active:scale-95 ${
                  draftCount > 0
                    ? 'bg-amber-500 text-white hover:bg-amber-600 animate-pulse'
                    : 'bg-indigo-800 text-indigo-400 opacity-50 cursor-not-allowed'
                }`}
              >
                {isSaving ? '⏳' : '💾'} Lưu ({draftCount})
              </button>

              <button
                onClick={() => setShowApiKeyModal(true)}
                className={`p-2.5 rounded-r-lg transition-all ${
                  apiKey
                    ? 'bg-emerald-600 text-white'
                    : 'bg-red-500 text-white animate-bounce'
                } shadow-md`}
              >
                ⚙️
              </button>
            </div>

          </div>

          <div className="flex bg-indigo-950/50 p-1 rounded-xl gap-1 flex-wrap justify-center">
            {['subject', 'competency', 'quality', 'specific'].map(m => (
              <button
                key={m}
                onClick={() => {
                  setViewMode(m);
                  setSelectedCriteriaId('');
                  setDraftData({});
                }}
                className={`px-4 py-2.5 rounded-lg text-[11px] font-black uppercase transition-all ${
                  viewMode === m
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-indigo-300 hover:text-white'
                }`}
              >
                {m === 'competency'
                  ? 'NL Chung'
                  : (m === 'subject'
                    ? 'Môn học'
                    : (m === 'quality'
                      ? 'Phẩm chất'
                      : 'NL Đặc thù'))}
              </button>
            ))}
          </div>

        </div>

      </div>
    </header>
  );
}
