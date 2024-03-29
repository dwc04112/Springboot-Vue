package kr.ac.daegu.springbootapi.board.controller;

import kr.ac.daegu.springbootapi.board.model.BoardDTO;
import kr.ac.daegu.springbootapi.board.service.BoardService;
import kr.ac.daegu.springbootapi.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping(value = "/board")
public class BoardController {

    public final BoardService boardService;

    @GetMapping(value = "/example")
    public List<BoardDTO> SomeAction(@RequestParam("tEst")String test) {
        log.info("board test = " + test);
        int test1 = Integer.parseInt(test);
        List<BoardDTO> list = boardService.getBoardByIdList(test1);
        return list;
    }

    @GetMapping(value = "/list")
    public List<BoardDTO> SelectList(){
        return boardService.getBoardList();
    }

    @GetMapping(value = "/{id}")
    public List<BoardDTO> SelectListid(@PathVariable int id){
        return boardService.getBoardByIdList(id);
    }

    @RequestMapping(value = "/list2", method = RequestMethod.GET)
    public void listAll(Model model) throws Exception{
        List<BoardDTO> boardVOS = boardService.getBoardList();
        JSONObject listObj = new JSONObject();
        JSONArray list = new JSONArray();
        JSONObject vo = new JSONObject();
        vo.put("boardid",boardVOS.get(1).getId());
        vo.put("boardTitle",boardVOS.get(1).getSubject());
        vo.put("boardWriter",boardVOS.get(1).getAuthor());

        list.add(1,vo);

        listObj.put("BoardVO",list);

        model.addAttribute("list",listObj);
    }


    @GetMapping(value = "/")
    public ApiResponse<BoardDTO> getBoardList(){
        List<BoardDTO> list = boardService.getBoardList();
        return new ApiResponse(true, list);
    }

    @PostMapping(value = "/")
    public ApiResponse<BoardDTO> postBoard(@RequestBody BoardDTO boardDTO) throws Exception {
        BoardDTO dto = boardService.postBoard(boardDTO);
        return new ApiResponse(true, dto);
    }

    @PutMapping(value = "/{id}")
    public ApiResponse<?> putBoard(@PathVariable int id,
                           @RequestBody BoardDTO boardDTO) throws Exception {
        log.debug("id: " + id);

        return boardService.putBoard(id, boardDTO);
    }

    /* mission */
    // 글 읽기
    // 요청URL은 GET http://localhost:8080/board/{id}
    @GetMapping(value = "bak/{id}")
    public ApiResponse<BoardDTO> getBoardById(@PathVariable int id) throws Exception {
         return boardService.getBoardById(id);
    }

    
    // 글 삭제
    // isDeleted : Y로 업데이트 시킴.
    // 요청URL은 DELETE http://localhost:8080/board/{id}
    @DeleteMapping(value = "/{id}")
    public ApiResponse<BoardDTO> updateIsDelBoardById(@PathVariable int id,
                                                      @RequestBody BoardDTO boardDTO) throws Exception {
        String boardPassword = boardDTO.getPassword();
        log.debug("request.id=" + id);
        log.debug("request.password=" + boardPassword);
        // password가 없을 경우
        if(boardPassword == null){
            return new ApiResponse<>(false, "boardPassword is null, please check key name 'password'", null);
        }
        return boardService.updateIsDelBoardById(id, boardPassword);
    }

}
