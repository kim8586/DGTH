function StudentTable({
  students,
  studentData,
  draftData,
  systemMode,
  viewMode,
  showLevel,
  showNote,
  QUALITY_CRITERIA,
  GENERAL_COMPETENCIES,
  SPECIFIC_COMPETENCIES,
  STUDENT_STATUS,
  draggedStudentId,
  dragOverStudentId,
  handleDragStart,
  handleDragOver,
  handleDrop,
  setDragOverStudentId,
  updateDraft,
  EditableCell,
  handleSendZalo,
  copySuccess,
  setStatusModalStudent,
  setConfirmDelete
}) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-400 shadow-2xl overflow-hidden mb-12 w-full">
      <div className="overflow-x-auto w-full">

        <table className="w-full border-collapse table-fixed min-w-[1200px]">

          {/* ===== HEADER ===== */}
          <thead>
            <tr className="bg-slate-200 border-b-2 border-slate-400">
              <th className="p-4 w-20">☰ STT</th>
              <th className="p-4 w-56">Học sinh</th>

              {(systemMode === 'smas' && viewMode !== 'subject') ? (
                showLevel && (viewMode === 'quality'
                  ? QUALITY_CRITERIA
                  : (viewMode === 'competency'
                    ? GENERAL_COMPETENCIES
                    : SPECIFIC_COMPETENCIES)
                ).map(c => (
                  <th key={c.id} className="p-2 text-[9px] w-20">
                    {c.name}
                  </th>
                ))
              ) : (
                showLevel && <th className="p-4 w-32">Mức đạt</th>
              )}

              {showNote && <th className="p-4 w-48">Ghi chú</th>}

              <th className="p-4 min-w-[400px]">Nhận xét</th>
              <th className="p-4 w-20">Zalo</th>
              <th className="p-4 w-12"></th>
            </tr>
          </thead>

          {/* ===== BODY ===== */}
          <tbody>
            {students.map((stu, idx) => {
              const d = studentData[stu.id] || {};
              const draft = draftData[stu.id] || {};

              const finalComment = draft.comment ?? d.comment ?? "";
              const finalNote = draft.note ?? d.note ?? "";

              const isInactive = stu.status && stu.status !== 'active';
              const isDragging = draggedStudentId === stu.id;
              const isDragOver = dragOverStudentId === stu.id;

              return (
                <tr
                  key={stu.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, stu.id)}
                  onDragOver={(e) => handleDragOver(e, stu.id)}
                  onDrop={(e) => handleDrop(e, stu.id)}
                  onDragLeave={() => setDragOverStudentId(null)}
                  className={`transition-all ${isDragging ? 'opacity-50' : ''} ${isDragOver ? 'bg-yellow-100' : ''}`}
                >

                  {/* STT */}
                  <td className="p-3 text-center">
                    {idx + 1}
                  </td>

                  {/* TÊN */}
                  <td className="p-3">
                    <button onClick={() => setStatusModalStudent(stu)}>
                      {stu.name}
                    </button>
                  </td>

                  {/* LEVEL */}
                  {(systemMode === 'smas' && viewMode !== 'subject') ? (
                    showLevel && (viewMode === 'quality'
                      ? QUALITY_CRITERIA
                      : (viewMode === 'competency'
                        ? GENERAL_COMPETENCIES
                        : SPECIFIC_COMPETENCIES)
                    ).map(c => {
                      const lvVal = draft[`level_${c.id}`] ?? d[`level_${c.id}`] ?? "";

                      return (
                        <td key={c.id}>
                          {['T','Đ','C'].map(lv => (
                            <button
                              key={lv}
                              disabled={isInactive}
                              onClick={() => updateDraft(stu.id, `level_${c.id}`, lv)}
                            >
                              {lv}
                            </button>
                          ))}
                        </td>
                      );
                    })
                  ) : (
                    showLevel && (
                      <td>
                        {(viewMode === 'subject' ? ['T','H','C'] : ['T','Đ','C']).map(lv => {
                          const lvVal = draft.level ?? d.level ?? "";

                          return (
                            <button
                              key={lv}
                              disabled={isInactive}
                              onClick={() => updateDraft(stu.id, 'level', lv)}
                            >
                              {lv}
                            </button>
                          );
                        })}
                      </td>
                    )
                  )}

                  {/* NOTE */}
                  {showNote && (
                    <td>
                      <EditableCell
                        disabled={isInactive}
                        value={finalNote}
                        onSave={(val) => updateDraft(stu.id, 'note', val)}
                      />
                    </td>
                  )}

                  {/* COMMENT */}
                  <td>
                    <EditableCell
                      disabled={isInactive}
                      value={finalComment}
                      onSave={(val) => updateDraft(stu.id, 'comment', val)}
                    />
                  </td>

                  {/* ZALO */}
                  <td>
                    <button
                      disabled={!finalComment || isInactive}
                      onClick={() => handleSendZalo(stu.id)}
                    >
                      {copySuccess === stu.id ? '✅' : 'Zalo'}
                    </button>
                  </td>

                  {/* DELETE */}
                  <td>
                    <button onClick={() => setConfirmDelete({ id: stu.id })}>
                      🗑️
                    </button>
                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>

      </div>
    </div>
  );
}
